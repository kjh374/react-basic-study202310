import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const App = () => {
  return (
    <div>
      <selection id='goal-form'>
        <CourseInput />
      </selection>
      <selection id='goals'>
        <CourseList />
      </selection>
    </div>
  );
};

export default App;
