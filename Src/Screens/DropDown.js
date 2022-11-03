import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { dropDownList } from '../Redux/Slice/globalSlice';

export const DropDown = ({ memberId, setMemberId }) => {
    const [isFocus, setIsFocus] = useState(false);
    const membersList = useSelector((state) => state.global.membersList);
    const data = dropDownList(membersList);
    const dispatch = useDispatch();

   

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={210}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Assign task to:' : '...'}
                searchPlaceholder="Search member"
                value={memberId}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setMemberId(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        padding: 27,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
