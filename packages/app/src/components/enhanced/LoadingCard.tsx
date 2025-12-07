import { makeStyles, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes shimmer': {
    '0%': { backgroundPosition: '200% 0' },
    '100%': { backgroundPosition: '-200% 0' },
  },
  card: {
    height: '100%',
    minHeight: 200,
  },
  shimmer: {
    background: `linear-gradient(
      90deg,
      ${theme.palette?.background?.default || '#f8f8f8'} 25%,
      ${theme.palette?.action?.hover || 'rgba(0,0,0,0.04)'} 50%,
      ${theme.palette?.background?.default || '#f8f8f8'} 75%
    )`,
    backgroundSize: '200% 100%',
    animation: '$shimmer 1.5s infinite',
    borderRadius: 4,
  },
  header: {
    height: 24,
    width: '60%',
    marginBottom: theme.spacing?.(2) || 16,
  },
  content: {
    height: 16,
    width: '100%',
    marginBottom: theme.spacing?.(1) || 8,
  },
  contentMedium: {
    width: '90%',
  },
  contentShort: {
    width: '75%',
  },
}));

interface LoadingCardProps {
  lines?: number;
}

/**
 * Loading placeholder card with shimmer animation
 */
export const LoadingCard = ({ lines = 4 }: LoadingCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={`${classes.shimmer} ${classes.header}`} />
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${classes.shimmer} ${classes.content} ${
              index === lines - 1
                ? classes.contentShort
                : index % 2 === 1
                ? classes.contentMedium
                : ''
            }`}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
