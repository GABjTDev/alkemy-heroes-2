const ProgressBar = ({title, progress, rol}) => {
    return (
        <div className="mb-3">
            <h3 style={{marginBottom: "0"}}>{title}</h3>
            <div className="progress" style={{width: "100%", height:"25px"}}>
                <div className={`progress-bar ${rol !== 'good'? 'bg-danger': ''}`}  role="progressbar" style={{width:`${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{`${progress}%`}</div>
            </div>
        </div>
    )
}

export default ProgressBar
