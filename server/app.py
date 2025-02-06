from flask import Flask,Request,jsonify
from flask_migrate import Migrate
from models import db

# Initialize the Flask app
app = Flask(__name__)

# Set up the database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize db and migrate with the app
db.init_app(app)
migrate = Migrate(app, db)


#HAHAHAHAHHAHAH FINALLYYYYYYY   API ROUTES TO HANDLE CRUD APPLICATION-----HAHAHAHAHAAHHAHAHAAHAH

# Create a new user
@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    user = User(
        name=data['name'],
        email=data['email'],
    )
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'}), 201


# Get all users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': u.id, 'name': u.name, 'email': u.email} for u in users])


# Get a specific user by ID
@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify({'id': user.id, 'name': user.name, 'email': user.email})


# Create a category
@app.route('/categories', methods=['POST'])
def create_category():
    data = request.json
    category = Category(name=data['name'], description=data.get('description'))
    db.session.add(category)
    db.session.commit()
    return jsonify({'message': 'Category created successfully'}), 201


# Get all categories
@app.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    return jsonify([{'id': c.id, 'name': c.name, 'description': c.description} for c in categories])


# Create a product
@app.route('/products', methods=['POST'])
def create_product():
    data = request.json
    product = Product(
        name=data['name'],
        description=data.get('description'),
        price=data['price'],
        image_url=data.get('image_url'),
        stock_quantity=data.get('stock_quantity', 0),
        category_id=data['category_id']
    )
    db.session.add(product)
    db.session.commit()
    return jsonify({'message': 'Product created successfully'}), 201


# Get all products
@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'stock_quantity': p.stock_quantity,
        'category': p.category.name
    } for p in products])


# Create an order
@app.route('/orders', methods=['POST'])
def create_order():
    data = request.json
    order = Order(
        user_id=data['user_id'],
        total_amount=data['total_amount'],
        shipping_address=data['shipping_address']
    )
    db.session.add(order)
    db.session.commit()
    return jsonify({'message': 'Order created successfully'}), 201


# Get all orders for a specific user
@app.route('/users/<int:user_id>/orders', methods=['GET'])
def get_user_orders(user_id):
    orders = Order.query.filter_by(user_id=user_id).all()
    return jsonify([{
        'order_id': o.id,
        'order_date': o.order_date,
        'total_amount': o.total_amount,
        'status': o.status
    } for o in orders])


# Add item to cart
@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.json
    cart = Cart.query.filter_by(user_id=data['user_id']).first()
    if not cart:
        cart = Cart(user_id=data['user_id'])
        db.session.add(cart)
        db.session.commit()

    cart_item = CartItem(
        cart_id=cart.id,
        product_id=data['product_id'],
        quantity=data['quantity']
    )
    db.session.add(cart_item)
    db.session.commit()
    return jsonify({'message': 'Item added to cart'}), 201



# Add a review
@app.route('/reviews', methods=['POST'])
def create_review():
    data = request.json
    review = Review(
        user_id=data['user_id'],
        product_id=data['product_id'],
        rating=data['rating'],
        review_text=data.get('review_text')
    )
    db.session.add(review)
    db.session.commit()
    return jsonify({'message': 'Review added successfully'}), 201









if __name__ == '__main__':
    app.run(port=5555, debug=True)





if __name__ == '__main__':
    app.run(port=5555, debug=True)