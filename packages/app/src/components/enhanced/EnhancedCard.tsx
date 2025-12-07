import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  cardWrapper: {
    height: '100%',
    '& > *': {
      height: '100%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '& > *:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  animated: {
    animation: '$fadeInUp 0.4s ease-out',
  },
  elevated: {
    '& > *': {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    },
    '& > *:hover': {
      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.12)',
    },
  },
  subtle: {
    '& > *': {
      border: '1px solid rgba(0, 0, 0, 0.08)',
    },
    '& > *:hover': {
      borderColor: theme.palette?.primary?.main || '#2563EB',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
    },
  },
  glow: {
    '& > *:hover': {
      boxShadow: `0 8px 24px rgba(220, 38, 38, 0.2)`,
    },
  },
}));

interface EnhancedCardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'subtle' | 'glow';
  animated?: boolean;
  className?: string;
}

/**
 * Wrapper component that adds hover effects and animations to cards
 */
export const EnhancedCard = ({
  children,
  variant = 'default',
  animated = true,
  className,
}: EnhancedCardProps) => {
  const classes = useStyles();

  const variantClass = variant !== 'default' ? classes[variant] : '';
  const animatedClass = animated ? classes.animated : '';

  return (
    <div className={`${classes.cardWrapper} ${variantClass} ${animatedClass} ${className || ''}`}>
      {children}
    </div>
  );
};

export default EnhancedCard;
