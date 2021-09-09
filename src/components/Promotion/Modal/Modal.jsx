import React, { useEffect, useState } from "react";

import UIModal from "components/UI/Modal/Modal";
import PromotionModalCommentsTree from "./CommentsTree/CommentsTree";
import useApi from "hooks/useApi";

import "./Modal.css";

export default function PromotionModal({ promotionId, onClickClose }) {
  const [comment, setComment] = useState("");

  const [load, loadInfo] = useApi({
    url: "/comments",
    method: "GET",
    params: {
      promotionId,
      _expand: "user",
    },
  });
  const [sendComment, sendCommentInfo] = useApi({
    url: "/comments",
    method: "POST",
  });

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    sendComment({
      data: {
        userId: 1,
        promotionId,
        comment,
      },
    });
    setComment('');
    load();
  }

  return (
    <UIModal isOpen onClickClose={onClickClose}>
      <form onSubmit={onSubmit} className="promotion-modal__comment-form">
        <textarea
          placeholder="Comentar..."
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        />
        <button 
          type="submit"
          disabled={sendCommentInfo.loading}
        >
          {sendCommentInfo.loading ?'Enviando': 'Enviar'}
        </button>
      </form>
      <PromotionModalCommentsTree comments={loadInfo.data} />
    </UIModal>
  );
}
