from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Database setup
DATABASE = 'baweed_groceries.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    if not os.path.exists(DATABASE):
        conn = get_db_connection()
        with app.open_resource('schema.sql', mode='r') as f:
            conn.executescript(f.read())
        conn.commit()
        conn.close()

# Routes
@app.route('/')
def home():
    conn = get_db_connection()
    products = conn.execute('SELECT * FROM products').fetchall()
    conn.close()
    return render_template('home.html', products=products)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    conn = get_db_connection()
    product = conn.execute('SELECT * FROM products WHERE product_id = ?', (product_id,)).fetchone()
    conn.close()
    return render_template('product_detail.html', product=product)

@app.route('/add-product', methods=['GET', 'POST'])
def add_product():
    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']
        image = request.files['image']

        if image:
            image_path = os.path.join('static/images/products', image.filename)
            image.save(image_path)
        else:
            image_path = None

        conn = get_db_connection()
        conn.execute('INSERT INTO products (name, price, image) VALUES (?, ?, ?)',
                     (name, price, image_path))
        conn.commit()
        conn.close()
        flash('Product added successfully!')
        return redirect(url_for('home'))
    return render_template('add_product.html')

@app.route('/register-customer', methods=['GET', 'POST'])
def register_customer():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        conn = get_db_connection()
        conn.execute('INSERT INTO customers (name, email, password) VALUES (?, ?, ?)',
                     (name, email, password))
        conn.commit()
        conn.close()
        flash('Customer registered successfully!')
        return redirect(url_for('home'))
    return render_template('register_customer.html')

@app.route('/place-order', methods=['GET', 'POST'])
def place_order():
    if request.method == 'POST':
        customer_id = request.form['customer_id']
        product_id = request.form['product_id']
        quantity = request.form['quantity']
        payment_method = request.form['payment_method']
        shipping_address = request.form['shipping_address']

        conn = get_db_connection()
        product = conn.execute('SELECT * FROM products WHERE product_id = ?', (product_id,)).fetchone()
        total_price = float(product['price']) * int(quantity)

        conn.execute('INSERT INTO orders (customer_id, product_id, quantity, total_price, payment_method, shipping_address) VALUES (?, ?, ?, ?, ?, ?)',
                     (customer_id, product_id, quantity, total_price, payment_method, shipping_address))
        conn.commit()
        conn.close()
        flash('Order placed successfully!')
        return redirect(url_for('order_confirmation'))
    return render_template('place_order.html')

@app.route('/order-confirmation')
def order_confirmation():
    return render_template('order_confirmation.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
