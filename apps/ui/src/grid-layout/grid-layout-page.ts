import { EventData, GestureStateTypes, PanGestureEventData, Page, View, ScrollView, GridLayout } from '@nativescript/core';

var page;
export function pageLoaded(args: EventData) {
	page = <Page>args.object;
}

let currentDeltaY = 0;
export function panLayout(args: PanGestureEventData) {
	const view = <View>args.object;
	const scrollView = <ScrollView>view.parent;

	if (args.state === GestureStateTypes.began) {
		currentDeltaY = 0;
		scrollView.isScrollEnabled = false;
	} else if (args.state === GestureStateTypes.changed) {
		const diff = args.deltaY - currentDeltaY;
		view.translateY += diff;
		currentDeltaY = args.deltaY;
	} else if (args.state === GestureStateTypes.ended) {
		scrollView.isScrollEnabled = true;
	}
}

let isShowingGridLayout: boolean = true;

export function showHide() {
	let gridContainer = page.getViewById('grid-container');
	console.log('tap tap');
	isShowingGridLayout = !isShowingGridLayout;

	if (!isShowingGridLayout) {
		gridContainer.visibility = 'hidden';
	} else {
		gridContainer.visibility = 'visible';
	}
}
