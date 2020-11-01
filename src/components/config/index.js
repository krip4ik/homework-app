import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: '100%',
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1,
    color: '#3c4144',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const rows = [
  { id: 'avatar', icon: true, label: 'Avatar' },
  { id: 'nickname', label: 'Nickname' },
  { id: 'userRole', label: 'User Role' },
  { id: 'isSiteAdmin', editable: true, label: 'isSiteAdmin' },
];
