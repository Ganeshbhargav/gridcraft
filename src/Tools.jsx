const Tools = ({ undo, redo, canUndo, canRedo, selectedColor, setSelectedColor, isEraser, setIsEraser, clearAll }) => {
    return (
        <div className="tools-cont">
            <button
                className={`tool-btn${!canUndo ? ' tool-btn--disabled' : ''}`}
                onClick={undo}
                disabled={!canUndo}
                title="Undo (last 5)"
            >
                ↩ Undo
            </button>
            <button
                className={`tool-btn${!canRedo ? ' tool-btn--disabled' : ''}`}
                onClick={redo}
                disabled={!canRedo}
                title="Redo (last 5)"
            >
                ↪ Redo
            </button>
            <button
                className={`tool-btn${isEraser ? ' tool-btn--active' : ''}`}
                onClick={() => setIsEraser(e => !e)}
                title="Eraser"
            >
                🧽 Eraser
            </button>
            <label className="color-picker-label" title="Pick a color">
                <span className="color-preview" style={{ backgroundColor: selectedColor }} />
                Color
                <input
                    type="color"
                    className="color-input"
                    value={selectedColor}
                    onChange={e => { setSelectedColor(e.target.value); setIsEraser(false); }}
                />
            </label>
            <button
                className="tool-btn"
                onClick={clearAll}
                title="Clear All"
            >
                ✦ Clear All
            </button>
        </div>
    );
}