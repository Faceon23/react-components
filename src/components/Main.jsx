import { useState } from "react";


function Main() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
    return (
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, possimus quos consequatur dolores aliquid, dolorem nam temporibus quia et repudiandae esse asperiores saepe at rerum voluptas doloribus? Quia, blanditiis necessitatibus.</p>
        <h3>Counter: {count}</h3>
        <button onClick={handleClick}>
            Click Me!
        </button>
        </main>
    )
}


export default Main;