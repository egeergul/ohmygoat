import React from 'react'
import "./Event.css"

const Event = () => {
    return (
        <div>
            <div className="event-container">
                <div className="event-header">
                   <p>ACM</p>
                   <p>Tech Summit</p>
                   <p>Restricted</p>
                </div>
                <div className="event-body">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTlkYjJjNTYtOTUyYS00NTQ5LWJhM2UtMTA2MzJhMDBmMzI2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"/>
                    <div className="event-body-right">

                        <p>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        </p>
                        <button className="btn btn-primary btn-block">View Event</button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Event
