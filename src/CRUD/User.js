import React, { useState } from "react";
import './styles.css';

export const User = ({ title, author, image, _id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    // window.confirm("Are u sure..!")
      // onDelete(id);
      if (window.confirm("Do you want to Delete The Book") == true) {
        alert("delete Sucessfully..!");
        onDelete(_id);
    } else {
        alert("cancelled..!")
    }
  };
 
  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(_id, evt.target.title.value, evt.target.author.value, evt.target.image.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        // <form onSubmit={handleOnEditSubmit}>
        //   <input placeholder="Name" name="title" defaultValue={title} />
        //   <input placeholder="Email" name="author" defaultValue={author} />
        //   <div className="">{img}</div>
        //     <button onSubmit={handleOnEditSubmit}>Save</button>
        // </form>
        <form className="book-card"  onSubmit={handleOnEditSubmit}>
          <div className="sub_books m-auto col-3">
          <span className="col-3 m-auto">{image}</span>
          </div>
          <div className="sub_books mt-4 col-6">
          <input placeholder="Title Name" name="title" defaultValue={title} />
          <input placeholder="Author Name" name="author" defaultValue={author} />
          </div>
          <div className="sub_books books_btn col-3">
          <button className="apibuttons" onSubmit={handleOnEditSubmit}><i class="bi bi-download"></i></button>
          </div>
        </form>
      ) : (
        // <div className="user col">
        //   <span className="col-3 m-auto">{img}</span>
        //   <div className="mt-4">
        //   <span className="col">{title}</span>
        //   <span className="">{author}</span>
        //   </div>
        //   <div className="btn-cnt col-2 ml-5 ">
        //     <button className="apibuttons" onClick={handleEdit}><i class="bi bi-pencil-square"></i></button>
        //     <button className="apibuttons" onClick={handleDelete}><i class="bi bi-trash3-fill"></i></button>
        //   </div>
        // </div>
        <div className="book-card">
          <div className="sub_books m-auto col-3">
          <span className="col-3 m-auto">{image}</span>
          </div>
          <div className="sub_books mt-4 col-6">
          <span className="col">{title}</span>
          <span className="">{author}</span>
          <h6 className="text-secondary mt-5">{_id}</h6>
          </div>
          <div className="sub_books books_btn col-3">
          <button className="apibuttons" onClick={handleEdit}><i class="bi bi-pencil-square"></i></button>
          <button className="apibuttons" onClick={handleDelete}><i class="bi bi-trash3-fill"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};
