function Line({ width, color }) {
    return (
        <div className={"bg-" + color + " h-px " + width} ></div>
    );
}

export default Line;