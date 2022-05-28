import { IEvents, IFightCard } from './interfaces';

export const formatEventsResponse = (events: IEvents[]) => {
  let formattedResponse = '';
  events.forEach(({ _id, title, date, time, fightNight, url }) => {
    const dateObj = new Date(date);
    const formattedLine = `\nEventId: ${_id} \nMainFight: ${title} \nDate: ${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()} \nTime: ${time} \nEventType: ${fightNight ? 'UFC-FightNight' : 'UFC'} \nEventLink: ${url} \n`;
    formattedResponse += formattedLine;
  });
  return formattedResponse;
};

export const formatEventFightsResponse = (event: IFightCard[]) => {
  let formattedResponse = '';
  event.forEach(({ redCornerFighter, blueCornerFighter }: IFightCard, index: number) => {
    formattedResponse += `${index === 0 ? 'Main Fight: ' : ''}${redCornerFighter.length <= 1 ? 'TBA' : redCornerFighter} vs ${blueCornerFighter.length <= 1 ? 'TBA' : blueCornerFighter}\n`;
    formattedResponse += '\n';
  });
  return formattedResponse;
};