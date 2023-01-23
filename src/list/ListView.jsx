function ListView({ elements, funcFilterItems }) {
    return (
        <div className="center-element">
            <input type="text" className="form-control w-100 m-4" placeholder="Ingresa texto para filtrar..." onChange={ev => funcFilterItems(ev.target.value)}/>
            <ul>
                {
                    elements.map((item, index) => item && <li key={index}> {item} </li>)
                }
            </ul>
        </div>
    );
}

export default ListView