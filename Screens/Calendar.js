import React from "react";
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

let currentDate = new Date();
const INITIAL_DATE = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDay()}`;

const DatePicker = () => {
    const [date, setDate] = React.useState(INITIAL_DATE)

    const onDayPress = React.useCallback((day) => {
        setDate(day.dateString);
        console.log(day)
    }, []);

    const marked = React.useMemo(() => {
        return {
          [date]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
            selectedTextColor: 'red'
          },
          ['2022-07-22']: {
            dotColor: 'red',
            marked: true
          }
        };
      }, [date]);
    
    return (
        <View>
            <Calendar
                current={INITIAL_DATE}
                markingType={'custom'}
                markedDates={marked}
                onDayPress={onDayPress}
            />
        </View>
    )
}

export default DatePicker;