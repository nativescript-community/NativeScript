
declare const enum CLAccuracyAuthorization {

	FullAccuracy = 0,

	ReducedAccuracy = 1
}

declare const enum CLActivityType {

	Other = 1,

	AutomotiveNavigation = 2,

	Fitness = 3,

	OtherNavigation = 4,

	Airborne = 5
}

declare const enum CLAuthorizationStatus {

	kCLAuthorizationStatusNotDetermined = 0,

	kCLAuthorizationStatusRestricted = 1,

	kCLAuthorizationStatusDenied = 2,

	kCLAuthorizationStatusAuthorizedAlways = 3,

	kCLAuthorizationStatusAuthorizedWhenInUse = 4,

	kCLAuthorizationStatusAuthorized = 3
}

declare class CLBackgroundActivitySession extends NSObject {

	static alloc(): CLBackgroundActivitySession; // inherited from NSObject

	static backgroundActivitySession(): CLBackgroundActivitySession;

	static new(): CLBackgroundActivitySession; // inherited from NSObject

	invalidate(): void;
}

declare class CLBeacon extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLBeacon; // inherited from NSObject

	static new(): CLBeacon; // inherited from NSObject

	readonly UUID: NSUUID;

	readonly accuracy: number;

	readonly major: number;

	readonly minor: number;

	readonly proximity: CLProximity;

	readonly proximityUUID: NSUUID;

	readonly rssi: number;

	readonly timestamp: Date;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class CLBeaconIdentityCondition extends CLCondition implements NSCopying, NSSecureCoding {

	static alloc(): CLBeaconIdentityCondition; // inherited from NSObject

	static new(): CLBeaconIdentityCondition; // inherited from NSObject

	readonly UUID: NSUUID;

	readonly major: number;

	readonly minor: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { UUID: NSUUID; });

	constructor(o: { UUID: NSUUID; major: number; });

	constructor(o: { UUID: NSUUID; major: number; minor: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithUUID(uuid: NSUUID): this;

	initWithUUIDMajor(uuid: NSUUID, major: number): this;

	initWithUUIDMajorMinor(uuid: NSUUID, major: number, minor: number): this;
}

declare class CLBeaconIdentityConstraint extends CLBeaconIdentityCondition implements NSCopying, NSSecureCoding {

	static alloc(): CLBeaconIdentityConstraint; // inherited from NSObject

	static new(): CLBeaconIdentityConstraint; // inherited from NSObject

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class CLBeaconRegion extends CLRegion {

	static alloc(): CLBeaconRegion; // inherited from NSObject

	static new(): CLBeaconRegion; // inherited from NSObject

	readonly UUID: NSUUID;

	readonly beaconIdentityConstraint: CLBeaconIdentityConstraint;

	readonly major: number;

	readonly minor: number;

	notifyEntryStateOnDisplay: boolean;

	readonly proximityUUID: NSUUID;

	constructor(o: { beaconIdentityConstraint: CLBeaconIdentityConstraint; identifier: string; });

	constructor(o: { proximityUUID: NSUUID; identifier: string; });

	constructor(o: { proximityUUID: NSUUID; major: number; identifier: string; });

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; identifier: string; });

	constructor(o: { UUID: NSUUID; identifier: string; });

	constructor(o: { UUID: NSUUID; major: number; identifier: string; });

	constructor(o: { UUID: NSUUID; major: number; minor: number; identifier: string; });

	initWithBeaconIdentityConstraintIdentifier(beaconIdentityConstraint: CLBeaconIdentityConstraint, identifier: string): this;

	initWithProximityUUIDIdentifier(proximityUUID: NSUUID, identifier: string): this;

	initWithProximityUUIDMajorIdentifier(proximityUUID: NSUUID, major: number, identifier: string): this;

	initWithProximityUUIDMajorMinorIdentifier(proximityUUID: NSUUID, major: number, minor: number, identifier: string): this;

	initWithUUIDIdentifier(uuid: NSUUID, identifier: string): this;

	initWithUUIDMajorIdentifier(uuid: NSUUID, major: number, identifier: string): this;

	initWithUUIDMajorMinorIdentifier(uuid: NSUUID, major: number, minor: number, identifier: string): this;

	peripheralDataWithMeasuredPower(measuredPower: number): NSMutableDictionary<string, any>;
}

declare class CLCircularGeographicCondition extends CLCondition implements NSSecureCoding {

	static alloc(): CLCircularGeographicCondition; // inherited from NSObject

	static new(): CLCircularGeographicCondition; // inherited from NSObject

	readonly center: CLLocationCoordinate2D;

	readonly radius: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { center: CLLocationCoordinate2D; radius: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCenterRadius(center: CLLocationCoordinate2D, radius: number): this;

	initWithCoder(coder: NSCoder): this;
}

declare class CLCircularRegion extends CLRegion {

	static alloc(): CLCircularRegion; // inherited from NSObject

	static new(): CLCircularRegion; // inherited from NSObject

	constructor(o: { center: CLLocationCoordinate2D; radius: number; identifier: string; });

	initWithCenterRadiusIdentifier(center: CLLocationCoordinate2D, radius: number, identifier: string): this;
}

declare class CLCondition extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLCondition; // inherited from NSObject

	static new(): CLCondition; // inherited from NSObject

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum CLDeviceOrientation {

	Unknown = 0,

	Portrait = 1,

	PortraitUpsideDown = 2,

	LandscapeLeft = 3,

	LandscapeRight = 4,

	FaceUp = 5,

	FaceDown = 6
}

declare const enum CLError {

	kCLErrorLocationUnknown = 0,

	kCLErrorDenied = 1,

	kCLErrorNetwork = 2,

	kCLErrorHeadingFailure = 3,

	kCLErrorRegionMonitoringDenied = 4,

	kCLErrorRegionMonitoringFailure = 5,

	kCLErrorRegionMonitoringSetupDelayed = 6,

	kCLErrorRegionMonitoringResponseDelayed = 7,

	kCLErrorGeocodeFoundNoResult = 8,

	kCLErrorGeocodeFoundPartialResult = 9,

	kCLErrorGeocodeCanceled = 10,

	kCLErrorDeferredFailed = 11,

	kCLErrorDeferredNotUpdatingLocation = 12,

	kCLErrorDeferredAccuracyTooLow = 13,

	kCLErrorDeferredDistanceFiltered = 14,

	kCLErrorDeferredCanceled = 15,

	kCLErrorRangingUnavailable = 16,

	kCLErrorRangingFailure = 17,

	kCLErrorPromptDeclined = 18,

	kCLErrorHistoricalLocationError = 19
}

declare class CLFloor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLFloor; // inherited from NSObject

	static new(): CLFloor; // inherited from NSObject

	readonly level: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class CLGeocoder extends NSObject {

	static alloc(): CLGeocoder; // inherited from NSObject

	static new(): CLGeocoder; // inherited from NSObject

	readonly geocoding: boolean;

	cancelGeocode(): void;

	geocodeAddressDictionaryCompletionHandler(addressDictionary: NSDictionary<any, any>, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodeAddressStringCompletionHandler(addressString: string, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodeAddressStringInRegionCompletionHandler(addressString: string, region: CLRegion, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodeAddressStringInRegionPreferredLocaleCompletionHandler(addressString: string, region: CLRegion, locale: NSLocale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodePostalAddressCompletionHandler(postalAddress: CNPostalAddress, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodePostalAddressPreferredLocaleCompletionHandler(postalAddress: CNPostalAddress, locale: NSLocale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	reverseGeocodeLocationCompletionHandler(location: CLLocation, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	reverseGeocodeLocationPreferredLocaleCompletionHandler(location: CLLocation, locale: NSLocale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
}

declare class CLHeading extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLHeading; // inherited from NSObject

	static new(): CLHeading; // inherited from NSObject

	readonly headingAccuracy: number;

	readonly magneticHeading: number;

	readonly timestamp: Date;

	readonly trueHeading: number;

	readonly x: number;

	readonly y: number;

	readonly z: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum CLLiveUpdateConfiguration {

	Default = 0,

	AutomotiveNavigation = 1,

	OtherNavigation = 2,

	Fitness = 3,

	Airborne = 4
}

declare class CLLocation extends NSObject implements CKRecordValue, NSCopying, NSSecureCoding {

	static alloc(): CLLocation; // inherited from NSObject

	static new(): CLLocation; // inherited from NSObject

	readonly altitude: number;

	readonly coordinate: CLLocationCoordinate2D;

	readonly course: number;

	readonly courseAccuracy: number;

	readonly ellipsoidalAltitude: number;

	readonly floor: CLFloor;

	readonly horizontalAccuracy: number;

	readonly sourceInformation: CLLocationSourceInformation;

	readonly speed: number;

	readonly speedAccuracy: number;

	readonly timestamp: Date;

	readonly verticalAccuracy: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { coordinate: CLLocationCoordinate2D; altitude: number; horizontalAccuracy: number; verticalAccuracy: number; course: number; courseAccuracy: number; speed: number; speedAccuracy: number; timestamp: Date; });

	constructor(o: { coordinate: CLLocationCoordinate2D; altitude: number; horizontalAccuracy: number; verticalAccuracy: number; course: number; courseAccuracy: number; speed: number; speedAccuracy: number; timestamp: Date; sourceInfo: CLLocationSourceInformation; });

	constructor(o: { coordinate: CLLocationCoordinate2D; altitude: number; horizontalAccuracy: number; verticalAccuracy: number; course: number; speed: number; timestamp: Date; });

	constructor(o: { coordinate: CLLocationCoordinate2D; altitude: number; horizontalAccuracy: number; verticalAccuracy: number; timestamp: Date; });

	constructor(o: { latitude: number; longitude: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	distanceFromLocation(location: CLLocation): number;

	encodeWithCoder(coder: NSCoder): void;

	getDistanceFrom(location: CLLocation): number;

	initWithCoder(coder: NSCoder): this;

	initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: Date): this;

	initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestampSourceInfo(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: Date, sourceInfo: CLLocationSourceInformation): this;

	initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseSpeedTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, speed: number, timestamp: Date): this;

	initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, timestamp: Date): this;

	initWithLatitudeLongitude(latitude: number, longitude: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface CLLocationCoordinate2D {
	latitude: number;
	longitude: number;
}
declare var CLLocationCoordinate2D: interop.StructType<CLLocationCoordinate2D>;

declare function CLLocationCoordinate2DIsValid(coord: CLLocationCoordinate2D): boolean;

declare function CLLocationCoordinate2DMake(latitude: number, longitude: number): CLLocationCoordinate2D;

declare var CLLocationDistanceMax: number;

declare class CLLocationManager extends NSObject {

	static alloc(): CLLocationManager; // inherited from NSObject

	static authorizationStatus(): CLAuthorizationStatus;

	static deferredLocationUpdatesAvailable(): boolean;

	static headingAvailable(): boolean;

	static isMonitoringAvailableForClass(regionClass: typeof NSObject): boolean;

	static isRangingAvailable(): boolean;

	static locationServicesEnabled(): boolean;

	static new(): CLLocationManager; // inherited from NSObject

	static regionMonitoringAvailable(): boolean;

	static regionMonitoringEnabled(): boolean;

	static significantLocationChangeMonitoringAvailable(): boolean;

	readonly accuracyAuthorization: CLAccuracyAuthorization;

	activityType: CLActivityType;

	allowsBackgroundLocationUpdates: boolean;

	readonly authorizationStatus: CLAuthorizationStatus;

	readonly authorizedForWidgetUpdates: boolean;

	delegate: CLLocationManagerDelegate;

	desiredAccuracy: number;

	distanceFilter: number;

	readonly heading: CLHeading;

	readonly headingAvailable: boolean;

	headingFilter: number;

	headingOrientation: CLDeviceOrientation;

	readonly location: CLLocation;

	readonly locationServicesEnabled: boolean;

	readonly maximumRegionMonitoringDistance: number;

	readonly monitoredRegions: NSSet<CLRegion>;

	pausesLocationUpdatesAutomatically: boolean;

	purpose: string;

	readonly rangedBeaconConstraints: NSSet<CLBeaconIdentityConstraint>;

	readonly rangedRegions: NSSet<CLRegion>;

	showsBackgroundLocationIndicator: boolean;

	allowDeferredLocationUpdatesUntilTraveledTimeout(distance: number, timeout: number): void;

	disallowDeferredLocationUpdates(): void;

	dismissHeadingCalibrationDisplay(): void;

	requestAlwaysAuthorization(): void;

	requestLocation(): void;

	requestStateForRegion(region: CLRegion): void;

	requestTemporaryFullAccuracyAuthorizationWithPurposeKey(purposeKey: string): void;

	requestTemporaryFullAccuracyAuthorizationWithPurposeKeyCompletion(purposeKey: string, completion: (p1: NSError) => void): void;

	requestWhenInUseAuthorization(): void;

	startMonitoringForRegion(region: CLRegion): void;

	startMonitoringForRegionDesiredAccuracy(region: CLRegion, accuracy: number): void;

	startMonitoringLocationPushesWithCompletion(completion: (p1: NSData, p2: NSError) => void): void;

	startMonitoringSignificantLocationChanges(): void;

	startMonitoringVisits(): void;

	startRangingBeaconsInRegion(region: CLBeaconRegion): void;

	startRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint): void;

	startUpdatingHeading(): void;

	startUpdatingLocation(): void;

	stopMonitoringForRegion(region: CLRegion): void;

	stopMonitoringLocationPushes(): void;

	stopMonitoringSignificantLocationChanges(): void;

	stopMonitoringVisits(): void;

	stopRangingBeaconsInRegion(region: CLBeaconRegion): void;

	stopRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint): void;

	stopUpdatingHeading(): void;

	stopUpdatingLocation(): void;
}

interface CLLocationManagerDelegate extends NSObjectProtocol {

	locationManagerDidChangeAuthorization?(manager: CLLocationManager): void;

	locationManagerDidChangeAuthorizationStatus?(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion?(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion?(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion?(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailRangingBeaconsForConstraintError?(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError): void;

	locationManagerDidFailWithError?(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError?(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates?(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion?(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], region: CLBeaconRegion): void;

	locationManagerDidRangeBeaconsSatisfyingConstraint?(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], beaconConstraint: CLBeaconIdentityConstraint): void;

	locationManagerDidResumeLocationUpdates?(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion?(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading?(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations?(manager: CLLocationManager, locations: NSArray<CLLocation> | CLLocation[]): void;

	locationManagerDidUpdateToLocationFromLocation?(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit?(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError?(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError?(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration?(manager: CLLocationManager): boolean;
}
declare var CLLocationManagerDelegate: {

	prototype: CLLocationManagerDelegate;
};

declare const enum CLLocationPushServiceError {

	Unknown = 0,

	MissingPushExtension = 1,

	MissingPushServerEnvironment = 2,

	MissingEntitlement = 3,

	UnsupportedPlatform = 4
}

declare var CLLocationPushServiceErrorDomain: string;

interface CLLocationPushServiceExtension extends NSObjectProtocol {

	didReceiveLocationPushPayloadCompletion(payload: NSDictionary<string, any>, completion: () => void): void;

	serviceExtensionWillTerminate?(): void;
}
declare var CLLocationPushServiceExtension: {

	prototype: CLLocationPushServiceExtension;
};

declare class CLLocationSourceInformation extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLLocationSourceInformation; // inherited from NSObject

	static new(): CLLocationSourceInformation; // inherited from NSObject

	readonly isProducedByAccessory: boolean;

	readonly isSimulatedBySoftware: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { softwareSimulationState: boolean; andExternalAccessoryState: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithSoftwareSimulationStateAndExternalAccessoryState(isSoftware: boolean, isAccessory: boolean): this;
}

declare class CLLocationUpdater extends NSObject {

	static alloc(): CLLocationUpdater; // inherited from NSObject

	static liveUpdaterWithConfigurationQueueHandler(configuration: CLLiveUpdateConfiguration, queue: interop.Pointer | interop.Reference<any>, handler: (p1: CLUpdate) => void): CLLocationUpdater;

	static liveUpdaterWithQueueHandler(queue: interop.Pointer | interop.Reference<any>, handler: (p1: CLUpdate) => void): CLLocationUpdater;

	static new(): CLLocationUpdater; // inherited from NSObject

	invalidate(): void;

	pause(): void;

	resume(): void;
}

declare class CLMonitor extends NSObject {

	static alloc(): CLMonitor; // inherited from NSObject

	static new(): CLMonitor; // inherited from NSObject

	static requestMonitorWithConfigurationCompletion(config: CLMonitorConfiguration, completionHandler: (p1: CLMonitor) => void): void;

	readonly monitoredIdentifiers: NSArray<string>;

	readonly name: string;

	addConditionForMonitoringIdentifier(condition: CLCondition, identifier: string): void;

	addConditionForMonitoringIdentifierAssumedState(condition: CLCondition, identifier: string, state: CLMonitoringState): void;

	monitoringRecordForIdentifier(identifier: string): CLMonitoringRecord;

	removeConditionFromMonitoringWithIdentifier(identifier: string): void;
}

declare class CLMonitorConfiguration extends NSObject {

	static alloc(): CLMonitorConfiguration; // inherited from NSObject

	static configWithMonitorNameQueueEventHandler(name: string, queue: interop.Pointer | interop.Reference<any>, eventHandler: (p1: CLMonitor, p2: CLMonitoringEvent) => void): CLMonitorConfiguration;

	static new(): CLMonitorConfiguration; // inherited from NSObject

	readonly eventHandler: (p1: CLMonitor, p2: CLMonitoringEvent) => void;

	readonly name: string;

	readonly queue: interop.Pointer | interop.Reference<any>;
}

declare class CLMonitoringEvent extends NSObject implements NSSecureCoding {

	static alloc(): CLMonitoringEvent; // inherited from NSObject

	static new(): CLMonitoringEvent; // inherited from NSObject

	readonly date: Date;

	readonly identifier: string;

	readonly refinement: CLCondition;

	readonly state: CLMonitoringState;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class CLMonitoringRecord extends NSObject implements NSSecureCoding {

	static alloc(): CLMonitoringRecord; // inherited from NSObject

	static new(): CLMonitoringRecord; // inherited from NSObject

	readonly condition: CLCondition;

	readonly lastEvent: CLMonitoringEvent;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum CLMonitoringState {

	Unknown = 0,

	Satisfied = 1,

	Unsatisfied = 2
}

declare class CLPlacemark extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLPlacemark; // inherited from NSObject

	static new(): CLPlacemark; // inherited from NSObject

	static placemarkWithLocationNamePostalAddress(location: CLLocation, name: string, postalAddress: CNPostalAddress): CLPlacemark;

	readonly ISOcountryCode: string;

	readonly addressDictionary: NSDictionary<any, any>;

	readonly administrativeArea: string;

	readonly areasOfInterest: NSArray<string>;

	readonly country: string;

	readonly inlandWater: string;

	readonly locality: string;

	readonly location: CLLocation;

	readonly name: string;

	readonly ocean: string;

	readonly postalAddress: CNPostalAddress;

	readonly postalCode: string;

	readonly region: CLRegion;

	readonly subAdministrativeArea: string;

	readonly subLocality: string;

	readonly subThoroughfare: string;

	readonly thoroughfare: string;

	readonly timeZone: NSTimeZone;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { placemark: CLPlacemark; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithPlacemark(placemark: CLPlacemark): this;
}

declare const enum CLProximity {

	Unknown = 0,

	Immediate = 1,

	Near = 2,

	Far = 3
}

declare class CLRegion extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLRegion; // inherited from NSObject

	static new(): CLRegion; // inherited from NSObject

	readonly center: CLLocationCoordinate2D;

	readonly identifier: string;

	notifyOnEntry: boolean;

	notifyOnExit: boolean;

	readonly radius: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { circularRegionWithCenter: CLLocationCoordinate2D; radius: number; identifier: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initCircularRegionWithCenterRadiusIdentifier(center: CLLocationCoordinate2D, radius: number, identifier: string): this;

	initWithCoder(coder: NSCoder): this;
}

declare const enum CLRegionState {

	Unknown = 0,

	Inside = 1,

	Outside = 2
}

declare var CLTimeIntervalMax: number;

declare class CLUpdate extends NSObject {

	static alloc(): CLUpdate; // inherited from NSObject

	static new(): CLUpdate; // inherited from NSObject

	readonly isStationary: boolean;

	readonly location: CLLocation;
}

declare class CLVisit extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CLVisit; // inherited from NSObject

	static new(): CLVisit; // inherited from NSObject

	readonly arrivalDate: Date;

	readonly coordinate: CLLocationCoordinate2D;

	readonly departureDate: Date;

	readonly horizontalAccuracy: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare var kCLDistanceFilterNone: number;

declare var kCLErrorDomain: string;

declare var kCLErrorUserInfoAlternateRegionKey: string;

declare var kCLHeadingFilterNone: number;

declare var kCLLocationAccuracyBest: number;

declare var kCLLocationAccuracyBestForNavigation: number;

declare var kCLLocationAccuracyHundredMeters: number;

declare var kCLLocationAccuracyKilometer: number;

declare var kCLLocationAccuracyNearestTenMeters: number;

declare var kCLLocationAccuracyReduced: number;

declare var kCLLocationAccuracyThreeKilometers: number;

declare var kCLLocationCoordinate2DInvalid: CLLocationCoordinate2D;
