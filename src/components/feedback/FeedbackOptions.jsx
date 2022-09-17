export const FeedbackOptions = ({handleIncrement}) => {
    return (
        <div>
          <button type="button" onClick={() => handleIncrement('good')}>
            Good
          </button>
          <button type="button" onClick={() => handleIncrement('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => handleIncrement('bad')}>
            Bad
          </button>
        </div>
    )
};
