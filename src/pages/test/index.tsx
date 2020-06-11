import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Test = () => {
  const history = useHistory();

  // console.log('====state', history.location.state);

  const goBack = () => {
    history.goBack();
  };

  return (
    <Button onClick={goBack} type="primary">
      返回上一页
    </Button>
  );
};
export default Test;
