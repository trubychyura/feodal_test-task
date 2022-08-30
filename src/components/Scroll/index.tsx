/** @format */

import { useEffect, useRef, useState } from 'react';

import Button from '../Button';

import { ReactComponent as CheckIcon } from '../../assets/icons/checkmark.svg';

import styles from './styles.module.scss';

const SOURCE_URL =
  'https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource';

interface IScrollProps {
  onButtonClick: () => void;
}

const Scroll = ({ onButtonClick }: IScrollProps) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);

  const scrollElemRef = useRef(null);

  useEffect(() => {
    fetchText();
  }, []);

  const fetchText = async () => {
    setIsLoading(true);
    const res = await fetch(SOURCE_URL);
    const data = await res.json();
    setText(data[0].text);
    setIsLoading(false);
  };

  const onScroll = () => {
    if (scrollElemRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElemRef.current;

      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        setReachedBottom(true);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isLoading ? (
          <div className={styles['content-loader']}>Loading ...</div>
        ) : (
          <div
            onScroll={onScroll}
            ref={scrollElemRef}
            className={styles['content-text']}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        )}
        {!reachedBottom && <div className={styles['content-transparency']} />}
      </div>
      <Button
        text="I agree"
        Icon={CheckIcon}
        onClick={onButtonClick}
        disabled={!reachedBottom}
      />
    </div>
  );
};

export default Scroll;
