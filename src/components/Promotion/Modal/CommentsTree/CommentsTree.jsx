import React from "react";
import "./CommentsTree.css";

export default function PromotionModalCommentsTree({ comments }) {
  if (!comments) {
    return <div>Carregando...</div>;
  }

  return (
    <ul className="promotion-modal-comments-tree">
      {comments.map((item) => (
        <li className="promotion-modal-comments-tree__item">
          <img
            src={item.user.avatarURL}
            alt={`Foto de ${item.user.name}`}
            className="promotion-modal-comments-tree__avatar"
          />
          <div
            className="promotion-modal-comments-tree__info"
          >
            <span>{item.user.name}</span>
            <p>{item.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
