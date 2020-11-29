import PropTypes, { arrayOf } from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from './Button/Button';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onLeaveFeedback={onLeaveFeedback} option={option} />
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: arrayOf(PropTypes.string.isRequired),
};
