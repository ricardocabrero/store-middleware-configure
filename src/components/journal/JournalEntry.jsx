import React from 'react';

export const JournalEntry = () => {
    return(
        <div className="journal__entry pointer">
            <div 
            style={{
                backgroundSize: 'cover',
                backgroundImage:'url("https://i.pinimg.com/originals/7b/ab/0f/7bab0fc5a9ae16a601632dd49c418a3c.png")',
            }}
            className="journal__entry-picture">
            </div>   
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    hola!
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, natus?
                </p>
            </div>
            <div className="journal__entry-data-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}