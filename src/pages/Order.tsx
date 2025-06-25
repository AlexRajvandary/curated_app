import Header from "../components/Header";
import Footer from "../components/Footer";

const mockOrder = {
  id: "ORD123456",
  picture: "https://via.placeholder.com/150",
  seller: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  price: "$99.99",
  status: "Shipped",
  quantity: 2,
  createdAt: "2025-06-24T14:30:00Z",
  paymentMethod: "Credit Card",
  deliveryAddress: "123 Main Street, London, UK",
  trackingNumber: "TRACK123456789",
  estimatedDelivery: "2025-06-29",
  total: "$109.99",
};

export default function OrderPage() {
 // const { orderId } = useParams(); // если маршрут: /orders/:orderId

  const order = mockOrder; // тут вместо mock — запрос к API по orderId

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-8 px-4 space-y-6">
        <h1 className="text-2xl font-bold">Order #{order.id}</h1>

        <div className="flex gap-6">
          <img
            src={order.picture}
            alt="Product"
            className="w-40 h-40 object-cover rounded border"
          />
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <img
                src={order.seller.avatar}
                alt={order.seller.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-lg font-semibold">{order.seller.name}</p>
            </div>
            <p className="text-gray-500">Status: <span className="font-medium">{order.status}</span></p>
            <p className="text-gray-500">Quantity: {order.quantity}</p>
            <p className="text-gray-500">Price per unit: {order.price}</p>
            <p className="text-gray-500">Total: {order.total}</p>
          </div>
        </div>

        <div className="space-y-2">
          <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
          <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
          <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-4 py-2 rounded">Contact Seller</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Download Invoice</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
