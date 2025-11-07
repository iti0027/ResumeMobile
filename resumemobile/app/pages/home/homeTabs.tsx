import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutMe from "../aboutMe/index";
import Academics from "../academics/index";
import Professional from "../professional/index";
import Project from "../projects/index";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="About Me" component={AboutMe} />
            <Tab.Screen name="Academics" component={Academics} />
            <Tab.Screen name="Professional" component={Professional} />
            <Tab.Screen name="Projects" component={Project} />
        </Tab.Navigator>
    );
}