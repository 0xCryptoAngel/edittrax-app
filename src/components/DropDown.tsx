import React, { useState } from "react";

const DropDown = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div>
    <button onClick={() => setIsExpanded(true)}
    className="bg-red-900 text-center px-4 py-4 shadow text-yellow-75 rounded-md  hover:opacity-50">
        DROPDOWN
    </button>
    {isExpanded &&
    <div className="bg-white">
        is expanded
    </div>

    }
    </div>
  )
}

export default DropDown;
