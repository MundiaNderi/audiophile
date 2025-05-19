import moongose from "mongoose";

const orderSchema = new moongose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  payment: { type: Object, required: true },
});

const orderModel =
  moongose.models.order || moongose.model("order", orderSchema);

export default orderModel;
