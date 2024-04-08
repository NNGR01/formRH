import React from "react";

interface SingleDataProps {
    divClass : string;
    pClass : string;
    title : string;
    field : string;
}

const SingleData:React.FC<SingleDataProps> = ({ divClass, pClass,title, field}) => {
    return (
        <div className={divClass}>
        <p>{title} :</p>
        <p className={pClass}>
          {field}
        </p>
      </div>
    )
}

export default SingleData;