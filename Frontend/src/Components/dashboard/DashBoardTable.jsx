import React from 'react'
import DashBoardVideoCard from './DashBoardVideoCard'

function DashBoardTable({handleEditVideo, videos, isToggling, handleCheckboxToggle, handleDeleteClick }) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <DashBoardVideoCard
                        handleEditVideo={handleEditVideo}
                        isToggling={isToggling}
                        handleCheckboxToggle={handleCheckboxToggle}
                        handleDeleteClick={handleDeleteClick}
                        key={video._id}
                        video={video}
                        cardStyle
                    />
                ))}
            </div>
        </div>
    )
}

export default DashBoardTable