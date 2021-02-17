export function grid(node) {
    const resize = () => {
        const widthBox = 70;
        let clientWidth = node.clientWidth;
        clientWidth -= 30;
        let columns = Math.floor(clientWidth / widthBox);
        clientWidth -= columns * 7;
        columns = Math.floor(clientWidth / widthBox);

        // HeightRows
        let clientHeight = node.clientHeight;
        clientHeight -= 30;
        let rows = Math.floor(clientHeight / widthBox);
        clientHeight -= rows * 7;
        rows = Math.floor(clientHeight / widthBox);

        node.style.gridTemplateColumns = `repeat(${columns}, ${widthBox}px)`;
        node.style.gridTemplateRows = `repeat(${rows}, ${widthBox}px)`;
    }
    window.addEventListener("resize", resize);
    resize();
    return {
        destroy() {
            node.removeEventListener('resize', resize);
        }
    };
}
