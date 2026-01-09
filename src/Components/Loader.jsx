const Loader = () => {
  return (
    <div className="buffering-overlay">
      <div className="buffering-content">
        <div className="spinner"></div>
        <p>Loading notes...</p>
      </div>
    </div>
  );
};

export default Loader;
