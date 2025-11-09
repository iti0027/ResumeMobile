import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from "../../constants/colors";
import {Ionicons} from '@expo/vector-icons';

import AboutMe from "../aboutMe/index";
import Academics from "../academics/index";
import Professional from "../professional/index";
import Project from "../projects/index";


const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return(
        <Tab.Navigator
                  screenOptions= {({ route }) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName;

                        switch (route.name) {
                            case 'About Me':
                                iconName = 'person-circle-outline';
                                break;
                            case 'Academics':
                                iconName = 'school-outline';
                                break;
                            case 'Professional':
                                iconName = 'briefcase-outline';
                                break;
                            case 'Projects':
                                iconName = 'code-slash-outline';
                                break;
                            default:
                                iconName = 'ellipse-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: Colors.primaryText,
                    tabBarInactiveTintColor: Colors.secondaryText,
                    tabBarStyle: {
                        backgroundColor: Colors.backgroundBolder,
                        borderTopColor: Colors.backgroundBolder,
                        borderTopWidth: 0,
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '600',
                    },
                    headerStyle:{
                        backgroundColor: Colors.backgroundBolder,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: Colors.primaryText,
                    },
                  })}
        >
            <Tab.Screen name="About Me" component={AboutMe} />
            <Tab.Screen name="Academics" component={Academics} />
            <Tab.Screen name="Professional" component={Professional} />
            <Tab.Screen name="Projects" component={Project} />
        </Tab.Navigator>
    );
}