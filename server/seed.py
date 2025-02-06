from faker import Faker
from sqlalchemy import func
from app import app
from models import db, User, Category, Product, Order, OrderItem, Cart, CartItem, Review

# Initialize Faker
fake = Faker()

def seed_users():
    users = []
    for _ in range(10):
        user = User(
            name=fake.name(),
            email=fake.unique.email(),
            role=fake.random_element(['customer', 'admin']),
        )
        user.set_password('password123')  # Default password for all users
        users.append(user)
    db.session.bulk_save_objects(users)
    db.session.commit()
    print("✅ Users seeded!")


def seed_categories():
    categories = ['Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Unisex Fashion']
    category_objects = []
    for name in categories:
        category = Category(
            name=name,
            description=fake.text(max_nb_chars=50)
        )
        category_objects.append(category)
    db.session.bulk_save_objects(category_objects)
    db.session.commit()
    print("✅ Categories seeded!")


def seed_products():
    product_names = {
        'Tops': ['Graphic Tee', 'Crop Top', 'Oversized Hoodie', 'Basic Tank'],
        'Bottoms': ['High-Waisted Jeans', 'Cargo Pants', 'Mini Skirt', 'Joggers'],
        'Outerwear': ['Denim Jacket', 'Puffer Coat', 'Bomber Jacket', 'Windbreaker'],
        'Accessories': ['Bucket Hat', 'Sunglasses', 'Gold Chain', 'Crossbody Bag'],
        'Unisex Fashion': ['Oversized Tee', 'Streetwear Set', 'Varsity Jacket', 'Sweatpants']
    }

    products = []
    categories = {category.name: category.id for category in Category.query.all()}

    for category, names in product_names.items():
        for name in names:
            product = Product(
                name=name,
                description=fake.text(max_nb_chars=100),
                price=round(fake.pyfloat(left_digits=3, right_digits=2, positive=True, min_value=20, max_value=300), 2),
                image_url=fake.image_url(),
                stock_quantity=fake.random_int(min=1, max=50),
                category_id=categories.get(category)
            )
            products.append(product)

    db.session.bulk_save_objects(products)
    db.session.commit()
    print("✅ Products seeded!")



def seed_orders():
    orders = []
    users = User.query.all()
    for _ in range(20):
        order = Order(
            user_id=fake.random_element([user.id for user in users]),
            total_amount=round(fake.pyfloat(left_digits=3, right_digits=2, positive=True, min_value=20, max_value=1000), 2),
            shipping_address=fake.address(),
            status=fake.random_element(['Pending', 'Shipped', 'Delivered']),
        )
        orders.append(order)
    db.session.bulk_save_objects(orders)
    db.session.commit()
    print("✅ Orders seeded!")


def seed_order_items():
    order_items = []
    orders = Order.query.all()
    products = Product.query.all()
    for _ in range(50):
        order_item = OrderItem(
            order_id=fake.random_element([order.id for order in orders]),
            product_id=fake.random_element([product.id for product in products]),
            quantity=fake.random_int(min=1, max=5),
            price=round(fake.pyfloat(left_digits=3, right_digits=2, positive=True, min_value=10, max_value=500), 2)
        )
        order_items.append(order_item)
    db.session.bulk_save_objects(order_items)
    db.session.commit()
    print("✅ Order items seeded!")


def seed_reviews():
    reviews = []
    users = User.query.all()
    products = Product.query.all()
    for _ in range(30):
        review = Review(
            user_id=fake.random_element([user.id for user in users]),
            product_id=fake.random_element([product.id for product in products]),
            rating=fake.random_int(min=1, max=5),
            review_text=fake.text()
        )
        reviews.append(review)
    db.session.bulk_save_objects(reviews)
    db.session.commit()
    print("✅ Reviews seeded!")


def seed_carts():
    carts = []
    users = User.query.all()
    for _ in range(10):
        cart = Cart(
            user_id=fake.random_element([user.id for user in users])
        )
        carts.append(cart)
    db.session.bulk_save_objects(carts)
    db.session.commit()
    print("✅ Carts seeded!")


def seed_cart_items():
    cart_items = []
    carts = Cart.query.all()
    products = Product.query.all()
    for _ in range(50):
        cart_item = CartItem(
            cart_id=fake.random_element([cart.id for cart in carts]),
            product_id=fake.random_element([product.id for product in products]),
            quantity=fake.random_int(min=1, max=5)
        )
        cart_items.append(cart_item)
    db.session.bulk_save_objects(cart_items)
    db.session.commit()
    print("✅ Cart items seeded!")


def seed_all():
    with app.app_context():
        db.drop_all()
        db.create_all()
        print("🔄 Database reset!")

        seed_users()
        seed_categories()
        seed_products()
        seed_orders()
        seed_order_items()
        seed_reviews()
        seed_carts()
        seed_cart_items()

        print("🚀 Seeding complete!")


if __name__ == "__main__":
    seed_all()
