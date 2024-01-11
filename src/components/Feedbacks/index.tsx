import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { useContext, useEffect } from 'react';
import { getFeedbacksData } from '../../services/FeedbacksData';
import { feedbacksContext } from '../../contexts/FeedbacksContext';
import iconSvg from '../../assets/UserIcon.svg';
import './Feedbacks.scss';

export function Feedbacks() {
  const {
    carouselRef,
    currentIndex,
    feedbackData,
    setCurrentIndex,
    setFeedbackData } = useContext(feedbacksContext);

  useEffect(() => {
    async function fetchFeedbacks() {
      const data = await getFeedbacksData();
      setFeedbackData(data);
    }
    fetchFeedbacks();
  }, []);

  function handleLeftClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault();
    const newIndex = currentIndex === 0 ? feedbackData.length - 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex <= 5) {
      setCurrentIndex(newIndex);
      scrollCarousel(newIndex);
    } else {
      setCurrentIndex(0);
      scrollCarousel(0);
    }
  }

  function handleRightClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault();
    const newIndex = currentIndex === feedbackData.length - 1 ? 0 : currentIndex + 1;
    if (newIndex >= 0 && newIndex <= 5) {
      setCurrentIndex(newIndex);
      scrollCarousel(newIndex);
    }
  }

  function scrollCarousel(index: number) {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft = itemWidth * index * 2;
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
