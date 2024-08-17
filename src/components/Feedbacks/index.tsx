import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { getFeedbacksData } from '../../services/FeedbacksData';
import { FeedbacksType } from '../../types/FeedbacksType';
import iconSvg from '../../assets/UserIcon.svg';
import './Feedbacks.scss';

export function Feedbacks() {
  const [feedbackData, setFeedbackData] = useState<FeedbacksType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchFeedbacks() {
      const data = await getFeedbacksData();
      setFeedbackData(data);
    }
    fetchFeedbacks();
  }, []);

  function handleLeftClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault();
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollCarousel(newIndex);
    }
  }

  function handleRightClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault();
    if (currentIndex < feedbackData.length - 2) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollCarousel(newIndex);
    }
  }

  function scrollCarousel(index: number) {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / 2;
      carouselRef.current.scrollLeft = itemWidth * index;
    }
  }

  const visibleFeedbacks = feedbackData.slice(currentIndex, currentIndex + 2);

  return (
    <div className="container-assessment" id="feedback">
      <div className="title-Assessments">
        <h1 className="title-style">Avaliações</h1>
      </div>
      <div className="container">
        <FontAwesomeIcon
          icon={ faChevronLeft }
          style={ { color: '#4d525c' } }
          className="chevron-style"
          onClick={ (e) => handleLeftClick(e) }
        />
        <div className="container-carousel" ref={ carouselRef }>
          {
            visibleFeedbacks.map((Feedback) => (
              <div key={ Feedback.id } className="carousel-style">
                <div className="icon-user">
                  <img src={ iconSvg } alt="icon" />
                </div>
                <div className="card-feedback">
                  <h2 className="text-autor">{ Feedback.autor }</h2>
                  <p>{ Feedback.descricao }</p>
                  <div className="Assessment">
                    <p>{format(new Date(Feedback.data), 'MMMM yyyy')}</p>
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
          onClick={ (e) => handleRightClick(e) }
        />
      </div>
      <div className="container-space">
        <div />
        <div />
      </div>
    </div>
  );
}
