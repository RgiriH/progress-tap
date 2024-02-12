import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const ProgressBar = ({ stages }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComleted, setIsCompleted] = useState(false);
    const ref = useRef([])
    const [margin, setmargin] = useState({
        ml: 0,
        mr: 0
    })

    const handelnext = () => {
        setCurrentIndex((pre) => {
            if (pre === stages.length - 2) {
                setIsCompleted(true)
                return pre + 1;
            }
                
            else {
                return pre + 1;
            }
        })
    }

    useEffect(() => {
        setmargin({
            ml: ref.current[0].offsetWidth / 2,
            mr: ref.current[stages.length - 1].offsetWidth / 2,
        });
       
    }, [])
    
    console.log(margin)
    const calculate = () => {
        return ((currentIndex  ) / (stages.length - 1) ) * 100;
    }
        
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "20px",
            alignContent: "center",
            position: "relative",
            
          }}
        >
          {stages.map((stage, index) => {
            return (
              <div
                key={index}
                className={`${index === currentIndex ? "active" : ""} ${
                  index < currentIndex || isComleted ? "completed" : ""
                }`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  textAlign: "center",
                  alignSelf: "center",
                  gap: "10px",
                  width: "100px",
                  
                }}
                ref={(node) => (ref.current[index] = node)}
              >
                <div
                  className={"step-number"}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px auto",
                  }}
                >
                  {index < currentIndex || isComleted ? (
                    <span>&#10003;</span>
                  ) : (
                    <>{index + 1}</>
                  )}
                </div>
                <div>{stage.name}</div>
              </div>
            );
          })}
                <div className="progress"
                    style={{
                        width: ` calc(100% - ${margin.ml + margin.mr}px)`,
                        marginLeft: margin.ml,
                        marginRight : margin.mr
                    }}
                >
                    <div className="inner-progress"
                        style={{
                            width : `${calculate()}%`
                        }}
                    ></div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {!isComleted ? (
            stages[currentIndex].div()
          ) : (
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "green",
              }}
            >
              Order successfully placed
            </div>
          )}
          {!isComleted && (
            <button
              style={{
                width: "100px",
                height: "30px",
                cursor: "pointer",
              }}
              onClick={handelnext}
            >
              {currentIndex === stages.length - 2 ? "finish" : "next"}
            </button>
          )}
        </div>
      </>
    );
}

export default ProgressBar