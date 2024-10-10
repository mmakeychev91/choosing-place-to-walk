import React, { useState, useEffect } from 'react';

// Список парков
const parks = [
  'Центральный парк культуры и отдыха имени Горького',
  'Парк Победы',
  'Горкинско-Ометьевский лес',
  'Парк «Сосновая роща»',
  'Парк им. Урицкого',
  'Парк Крылья Советов',
  'Парк «Черное озеро»',
  'Лядской сад',
  'Сквер им. Аксенова',
  'Сквер по улице Мира',
  'Парк у Центра семьи «Казан»',
  'Парк «Континент»',
  'Парк «Калейдоскоп»',
  'Сквер им. Тинчурина',
  'Бульвар «Ак чәчәкләр» («Белые цветы»)',
  'Бульвар «Фестивальный»',
  'Парк «Комсомолец»',
  'Набережная озера Кабан',
  'Бульвар по ул. Фучика',
  'Пляж озера Комсомольское',
  'Пляж озера Лебяжье',
  'Парк у ДК им. Саид-Галиева',
  'Набережная реки Казанки',
  'Входная площадь у лесопарка «Дубрава»',
  'Парк у театра кукол «Экият»',
  'Парк у ЖК «Салават купере»',
  'Ленинский сад',
  'Сквер 100-летия образования строительной отрасли РТ',
  'Парк у ЖК «Светлая долина»',
  'Сад Эрмитаж',
  'Вахитовский холм',
  'Пляж Локомотив',
  'Набережная у ЖК Ричмонд',
  'Министерство юстиции',
  'Центр гребных видов спорта (средний Кабан)',
  'Улица Баумана',
  'Улица Петербургская',
  'Раифа',
  'Дендрарий',
  'Свияжск',
  'Боровое матюшино'
];

function App() {
  const [visitedParks, setVisitedParks] = useState(() => {
    // Попробуем загрузить данные при инициализации
    const savedParks = localStorage.getItem('visitedParks');
    return savedParks ? JSON.parse(savedParks) : [];
  });

  useEffect(() => {
    // Сохранение данных в localStorage при каждом изменении visitedParks
    if (visitedParks.length > 0) {
      localStorage.setItem('visitedParks', JSON.stringify(visitedParks));
      console.log('Saving parks to localStorage:', visitedParks); // Проверка сохраняемых данных
    }
  }, [visitedParks]);

  const markAsVisited = (park) => {
    if (!visitedParks.includes(park)) {
      const updatedVisitedParks = [...visitedParks, park];
      setVisitedParks(updatedVisitedParks);
      localStorage.setItem('visitedParks', JSON.stringify(updatedVisitedParks)); // Обновляем localStorage
    }
  };

  const getRandomPark = () => {
    const unvisitedParks = parks.filter(park => !visitedParks.includes(park));
    const randomIndex = Math.floor(Math.random() * unvisitedParks.length);
    return unvisitedParks.length > 0 ? unvisitedParks[randomIndex] : "Все парки уже посещены";
  };

  return (
    <div className="App">
      <h1>Мой чек-лист парков</h1>
      <ul>
        {parks.map((park, index) => (
          <li key={index}>
            {visitedParks.includes(park) ? (
              <span>✔️ {park}</span>
            ) : (
              <>
                <button onClick={() => markAsVisited(park)}>Done</button> {park}
              </>
            )}
          </li>
        ))}
      </ul>

      <button onClick={() => alert(getRandomPark())}>Выбрать случайное место</button>
    </div>
  );
}

export default App;
