import { ReactNode, useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateX(10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  content: {
    width: '100%',
  },
  entering: {
    animation: '$fadeIn 0.25s ease-out forwards',
  },
  entered: {
    opacity: 1,
  },
});

interface AnimatedTabContentProps {
  children: ReactNode;
  tabKey: string;
}

/**
 * Wrapper that animates content when tab changes
 */
export const AnimatedTabContent = ({ children, tabKey }: AnimatedTabContentProps) => {
  const classes = useStyles();
  const [isEntering, setIsEntering] = useState(true);
  const prevKeyRef = useRef(tabKey);

  useEffect(() => {
    if (tabKey !== prevKeyRef.current) {
      setIsEntering(true);
      prevKeyRef.current = tabKey;

      const timer = setTimeout(() => {
        setIsEntering(false);
      }, 250);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [tabKey]);

  useEffect(() => {
    // Initial mount animation
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.container}>
      <div className={`${classes.content} ${isEntering ? classes.entering : classes.entered}`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedTabContent;
