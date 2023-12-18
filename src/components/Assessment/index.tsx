import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { useEffect, useState } from 'react';
import { getAssessmentData } from '../../services/AssessmentData';
import { AssessmentType } from '../../types/AssessmentType';
import iconSvg from '../../assets/UserIcon.svg';
import './Assessment.scss';

export function Assessment() {
  const [assessmentData, setAssessmentData] = useState<AssessmentType[]>([]);

  useEffect(() => {
    async function getAssessment() {
      const data = await getAssessmentData();
      setAssessmentData(data.splice(0, 2));
    }
    getAssessment();
  }, []);

  return (
    <div className="container-assessment">
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
            assessmentData.map((assessment) => (
              <div key={ assessment.id } className="frame-107">
                <div className="icon-user">
                  <img src={ iconSvg } alt="icon" />
                </div>
                <div className="frame-108">
                  <h2 className="text-autor">{ assessment.autor }</h2>
                  <p>{ assessment.descricao }</p>
                  <div className="frame-109">
                    <p>{ assessment.data }</p>
                    <Rate disabled defaultValue={ assessment.nota } />
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
