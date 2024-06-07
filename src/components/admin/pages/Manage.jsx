import React, { useEffect, useRef, useState } from "react";
import { delete_api, get_api, post_api, update_api } from "../../../api/api";
import {
  delete_product,
  get_product,
  post_product,
  put_product,
} from "../../../constant";
import Swal from "sweetalert2";

const Manage = () => {
  const [product, setproduct] = useState([]);
  const [view, setview] = useState({});

  let name = useRef();
  let price = useRef();
  let desc = useRef();

  async function getProduct() {
    let result = await get_api(get_product);
    console.log(result);
    setproduct(result.data);
  }

  async function addProduct() {
    let data = {
      productName: name.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };

    let result = await post_api(post_product, data);
    if (result.status == 201) {
      Swal.fire({
        title: "Good job!",
        text: "product added successfully",
        icon: "success",
      });
      setproduct([...product, result.data]);
    }
  }

  async function deleteProduct(id) {
    console.log(id);
    let res = await delete_api(delete_product, id);
    console.log(res);

    if (res.status == 200) {
      Swal.fire({
        title: "Good job!",
        text: "product deleted successfully",
        icon: "success",
      });

      setproduct(product.filter((val) => val.id !== id));
    }
  }

  function viewProduct(val) {
    console.log(val);
    setview(val);
  }

  function handle(e) {
    setview({ ...view, [e.target.name]: e.target.value });
    console.log(view);
  }

  async function updateProduct() {
    let res = await update_api(put_product, view);
    console.log(res);

    if (res.status == 200) {
      Swal.fire({
        title: "Good job!",
        text: "product updated successfully",
        icon: "success",
      });

      setproduct(product.map((val) => (val.id == view.id ? { ...view } : val)));
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <input type="text" ref={name} />
      <input type="number" ref={price} />
      <input type="text" ref={desc} />
      <button onClick={addProduct}>Add</button>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* model */}
      <input
        type="text"
        name="productName"
        value={view.productName}
        onChange={handle}
      />
      <input type="number" name="price" value={view.price} onChange={handle} />
      <input type="text" name="desc" value={view.desc} onChange={handle} />
      <button onClick={updateProduct}>update</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">productName</th>
            <th scope="col">price</th>
            <th scope="col">Description</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((val, index) => {
            return (
              <tr>
                <th scope="row">{val.id}</th>
                <td>{val.productName}</td>
                <td>{val.price}</td>
                <td>{val.desc}</td>
                <td>
                  <button onClick={() => viewProduct(val)}>View</button>
                </td>
                <td>
                  <button onClick={() => deleteProduct(val.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Manage;
