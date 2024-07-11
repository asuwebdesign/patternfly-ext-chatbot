// ============================================================================
// Chatbot Main - Separator
//
// Usage:
// <Separator type="" value="" />
// <Separator type="text" value="Text string" />
// <Separator type="date" value="2024-07-08" />
// ============================================================================

// Import styles
import './Separator.scss'

const Separator = ({ type, value }) => {

  // Configure values
  const textValue = value ? value : 'No value provided'
  const dateValue = value ? formatDate(value) : 'No date provided'

  // Format date value
  function formatDate(date) {
    const now = new Date();
    const inputDate = new Date(date);

    // Check if the date is today
    if (now.toDateString() === inputDate.toDateString()) {
      return 'Today';
    }

    // Check if the date is yesterday
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (yesterday.toDateString() === inputDate.toDateString()) {
      return 'Yesterday';
    }

    // Otherwise, format the date with abbreviated month
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return inputDate.toLocaleDateString(undefined, options);
  }

  return (
    <div className={`pf-chatbot__separator ${type ? 'pf-chatbot__separator--' + type : ''}`}>
      {type === 'text' && textValue}
      {type === 'date' && <span>{dateValue}</span>}
    </div>
  )
}

export default Separator