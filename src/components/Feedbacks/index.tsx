import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { useEffect, useState } from 'react';
import { getFeedbacksData } from '../../services/FeedbacksData';
import { FeedbacksType } from '../../types/FeedbacksType';
import iconSvg from '../../assets/UserIcon.svg';
import './Feedbacks.scss';

export function Feedbacks() {
  const [FeedBackData, setFeedBackData] = useState<FeedbacksType[]>([]);

  useEffect(() => {
    async function getFeedback() {
      const data = await getFeedbacksData();
      setFeedBackData(data.splice(0, 2));
    }
    getFeedback();
  }, []);

  return (
    <div className="container-assessment" id="feedback">
      <div className="frame-113">
        <div className="frame-115" />
        <h1 className="title-style">Avaliações</h1>
      </div>
      <div className="frame-110">
        <FontAwesomeIcon
          icon={ faChevronLeft }
          style={ { color: '#4d525c' } }
          className="chevron-style"
        />
        <div className="frame-139">
          {
            FeedBackData.map((Feedback) => (
              <div key={ Feedback.id } className="frame-107">
                <div className="icon-user">
                  <img src={ iconSvg } alt="icon" />
                </div>
                <div className="frame-108">
                  <h2 className="text-autor">{ Feedback.autor }</h2>
                  <p>{ Feedback.descricao }</p>
                  <div className="frame-109">
                    <p>{ Feedback.data }</p>
                    <Rate disabled defaultValue={ Feedback.nota } />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <FontAwesomeIcon
          icon={ faChevronRight }
          style={ { color: '#4d525c' } }
          className="chevron-style"
        />
      </div>
      <div className="frame-111">
        <div className="frame-211" />
        <div className="frame-311" />
      </div>
    </div>
  );
}
