import { darkTheme } from '../../assets/theme/theme';

const CalendarStyles = {
  '.react-datepicker *': {
    fontFamily: 'Poppins, Golos Text, sans-serif',
    backgroundColor: `${darkTheme.dark.colors.svgColor}`,
    color: `${darkTheme.dark.colors.textColor}`,
  },

  '.react-datepicker-wrapper': {
    marginTop: '4px',
  },

  '.react-datepicker__input-container input[type="text"]': {
    border: 'none !important',
    padding: '0px !important',
    marginBottom: '0',
    opacity: '1',
    color: `${darkTheme.dark.colors.accentColor}`,
    boxShadow: 'none',
    borderRadius: '0',
  },

  '.react-datepicker-popper': {
    left: '50% !important',
    transform: 'translate(-50%, 30%) !important',
  },

  '.react-datepicker__current-month': {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '-0.32px',
    borderBottom: `1px solid ${darkTheme.dark.colors.lightgreyTextColor}`,
    paddingBottom: '14px',
  },

  '.react-datepicker__month-container': {
    padding: '15px',
  },

  '.react-datepicker__day-names': {
    border: 'none !important',
  },

  '.react-datepicker__day-name': {
    color: `${darkTheme.dark.colors.textColor}`,
    opacity: '0.6',
    fontWeight: '500',
  },

  '.react-datepicker__header, .react-datepicker__month-container, .react-datepicker':
    {
      borderRadius: '8px',
    },

  '.react-datepicker__header': {
    border: 'none',
    marginBottom: '-10px',
  },

  '.react-datepicker__navigation-icon::before, .react-datepicker__navigation:hover .react-datepicker__navigation-icon::before':
    {
      borderColor: `${darkTheme.dark.colors.accentColor}`,
      borderRadius: '1.5px',
      transition: `border-color ${darkTheme.dark.colors.easedTransition}`,
    },

  '.react-datepicker__day:hover:not(.react-datepicker__day--disabled)': {
    outline: `1px solid ${darkTheme.dark.colors.textColor}`,
    backgroundColor: 'transparent',
    borderRadius: '50%',
  },

  '.react-datepicker__day': {
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '-0.28px',
  },

  '.react-datepicker__day--selected': {
    backgroundColor: `${darkTheme.dark.colors.accentColor} !important`,
    color: `${darkTheme.dark.colors.calendarActiveDay}`,
    borderRadius: '50%',
  },

  '.react-datepicker__day--selected:hover': {
    outline: `1px solid ${darkTheme.dark.colors.textColor}`,
    backgroundColor: `${darkTheme.dark.colors.accentColor}`,
    borderRadius: '50%',
  },

  '.react-datepicker__day--disabled': {
    cursor: 'not-allowed',
    opacity: '0.3',
  },

  '.react-datepicker__triangle path': {
    display: 'none',
  },
};

export default CalendarStyles;
