import {
  DataSnapshot,
  ListenEvent,
  ListenerMethods,
  OnDisconnect,
  QueryConstraint,
  QueryImpl,
  QueryParams,
  ReferenceImpl,
  TransactionResult,
  _initStandalone,
  auditTrail,
  changeToData,
  child,
  connectDatabaseEmulator,
  enableLogging,
  endAt,
  endBefore,
  equalTo,
  forceLongPolling,
  forceRestClient,
  forceWebSockets,
  fromRef,
  get,
  getDatabase,
  goOffline,
  goOnline,
  hijackHash,
  increment,
  limitToFirst,
  limitToLast,
  list,
  listVal,
  object,
  objectVal,
  off,
  onChildAdded,
  onChildChanged,
  onChildMoved,
  onChildRemoved,
  onDisconnect,
  onValue,
  orderByChild,
  orderByKey,
  orderByPriority,
  orderByValue,
  push,
  query,
  ref,
  refFromURL,
  remove,
  repoManagerDatabaseFromApp,
  runTransaction,
  serverTimestamp,
  set,
  setPriority,
  setSDKVersion,
  setWithPriority,
  startAfter,
  startAt,
  stateChanges,
  update,
  validatePathString,
  validateWritablePath
} from "./chunk-KR6VETPW.js";
import {
  AuthInstances
} from "./chunk-54FWGVCQ.js";
import {
  FirebaseApp,
  FirebaseApps,
  VERSION,
  ɵAngularFireSchedulers,
  ɵAppCheckInstances,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵzoneWrap
} from "./chunk-TPDQ5RFU.js";
import {
  registerVersion
} from "./chunk-4QO5HM7M.js";
import {
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-4TDP6L7W.js";
import "./chunk-663X6QEZ.js";
import "./chunk-AHCYN2QL.js";
import {
  concatMap,
  distinct,
  from,
  timer
} from "./chunk-UFRF26CS.js";
import "./chunk-LJ4VCL4A.js";

// node_modules/@angular/fire/fesm2022/angular-fire-database.mjs
var Database = class {
  constructor(database) {
    return database;
  }
};
var DATABASE_PROVIDER_NAME = "database";
var DatabaseInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(DATABASE_PROVIDER_NAME);
  }
};
var databaseInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(DATABASE_PROVIDER_NAME))), distinct());
var PROVIDED_DATABASE_INSTANCES = new InjectionToken("angularfire2.database-instances");
function defaultDatabaseInstanceFactory(provided, defaultApp) {
  const defaultDatabase = ɵgetDefaultInstanceOf(DATABASE_PROVIDER_NAME, provided, defaultApp);
  return defaultDatabase && new Database(defaultDatabase);
}
function databaseInstanceFactory(fn) {
  return (zone, injector) => {
    const database = zone.runOutsideAngular(() => fn(injector));
    return new Database(database);
  };
}
var DATABASE_INSTANCES_PROVIDER = {
  provide: DatabaseInstances,
  deps: [[new Optional(), PROVIDED_DATABASE_INSTANCES]]
};
var DEFAULT_DATABASE_INSTANCE_PROVIDER = {
  provide: Database,
  useFactory: defaultDatabaseInstanceFactory,
  deps: [[new Optional(), PROVIDED_DATABASE_INSTANCES], FirebaseApp]
};
var DatabaseModule = class _DatabaseModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "rtdb");
  }
  static ɵfac = function DatabaseModule_Factory(t) {
    return new (t || _DatabaseModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DatabaseModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [DEFAULT_DATABASE_INSTANCE_PROVIDER, DATABASE_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatabaseModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_DATABASE_INSTANCE_PROVIDER, DATABASE_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideDatabase(fn, ...deps) {
  registerVersion("angularfire", VERSION.full, "rtdb");
  return makeEnvironmentProviders([DEFAULT_DATABASE_INSTANCE_PROVIDER, DATABASE_INSTANCES_PROVIDER, {
    provide: PROVIDED_DATABASE_INSTANCES,
    useFactory: databaseInstanceFactory(fn),
    multi: true,
    deps: [
      NgZone,
      Injector,
      ɵAngularFireSchedulers,
      FirebaseApps,
      // Database+Auth work better if Auth is loaded first
      [new Optional(), AuthInstances],
      [new Optional(), ɵAppCheckInstances],
      ...deps
    ]
  }]);
}
var fromRef2 = ɵzoneWrap(fromRef, true);
var stateChanges2 = ɵzoneWrap(stateChanges, true);
var list2 = ɵzoneWrap(list, true);
var listVal2 = ɵzoneWrap(listVal, true);
var auditTrail2 = ɵzoneWrap(auditTrail, true);
var object2 = ɵzoneWrap(object, true);
var objectVal2 = ɵzoneWrap(objectVal, true);
var changeToData2 = ɵzoneWrap(changeToData, true);
var child2 = ɵzoneWrap(child, true);
var connectDatabaseEmulator2 = ɵzoneWrap(connectDatabaseEmulator, true);
var enableLogging2 = ɵzoneWrap(enableLogging, true);
var endAt2 = ɵzoneWrap(endAt, true);
var endBefore2 = ɵzoneWrap(endBefore, true);
var equalTo2 = ɵzoneWrap(equalTo, true);
var forceLongPolling2 = ɵzoneWrap(forceLongPolling, true);
var forceWebSockets2 = ɵzoneWrap(forceWebSockets, true);
var get2 = ɵzoneWrap(get, true);
var getDatabase2 = ɵzoneWrap(getDatabase, true);
var goOffline2 = ɵzoneWrap(goOffline, true);
var goOnline2 = ɵzoneWrap(goOnline, true);
var increment2 = ɵzoneWrap(increment, true);
var limitToFirst2 = ɵzoneWrap(limitToFirst, true);
var limitToLast2 = ɵzoneWrap(limitToLast, true);
var off2 = ɵzoneWrap(off, true);
var onChildAdded2 = ɵzoneWrap(onChildAdded, true);
var onChildChanged2 = ɵzoneWrap(onChildChanged, true);
var onChildMoved2 = ɵzoneWrap(onChildMoved, true);
var onChildRemoved2 = ɵzoneWrap(onChildRemoved, true);
var onDisconnect2 = ɵzoneWrap(onDisconnect, true);
var onValue2 = ɵzoneWrap(onValue, true);
var orderByChild2 = ɵzoneWrap(orderByChild, true);
var orderByKey2 = ɵzoneWrap(orderByKey, true);
var orderByPriority2 = ɵzoneWrap(orderByPriority, true);
var orderByValue2 = ɵzoneWrap(orderByValue, true);
var push2 = ɵzoneWrap(push, true);
var query2 = ɵzoneWrap(query, true);
var ref2 = ɵzoneWrap(ref, true);
var refFromURL2 = ɵzoneWrap(refFromURL, true);
var remove2 = ɵzoneWrap(remove, true);
var runTransaction2 = ɵzoneWrap(runTransaction, true);
var serverTimestamp2 = ɵzoneWrap(serverTimestamp, true);
var set2 = ɵzoneWrap(set, true);
var setPriority2 = ɵzoneWrap(setPriority, true);
var setWithPriority2 = ɵzoneWrap(setWithPriority, true);
var startAfter2 = ɵzoneWrap(startAfter, true);
var startAt2 = ɵzoneWrap(startAt, true);
var update2 = ɵzoneWrap(update, true);
export {
  DataSnapshot,
  Database,
  DatabaseInstances,
  DatabaseModule,
  ListenEvent,
  ListenerMethods,
  OnDisconnect,
  QueryConstraint,
  TransactionResult,
  QueryImpl as _QueryImpl,
  QueryParams as _QueryParams,
  ReferenceImpl as _ReferenceImpl,
  forceRestClient as _TEST_ACCESS_forceRestClient,
  hijackHash as _TEST_ACCESS_hijackHash,
  _initStandalone,
  repoManagerDatabaseFromApp as _repoManagerDatabaseFromApp,
  setSDKVersion as _setSDKVersion,
  validatePathString as _validatePathString,
  validateWritablePath as _validateWritablePath,
  auditTrail2 as auditTrail,
  changeToData2 as changeToData,
  child2 as child,
  connectDatabaseEmulator2 as connectDatabaseEmulator,
  databaseInstance$,
  enableLogging2 as enableLogging,
  endAt2 as endAt,
  endBefore2 as endBefore,
  equalTo2 as equalTo,
  forceLongPolling2 as forceLongPolling,
  forceWebSockets2 as forceWebSockets,
  fromRef2 as fromRef,
  get2 as get,
  getDatabase2 as getDatabase,
  goOffline2 as goOffline,
  goOnline2 as goOnline,
  increment2 as increment,
  limitToFirst2 as limitToFirst,
  limitToLast2 as limitToLast,
  list2 as list,
  listVal2 as listVal,
  object2 as object,
  objectVal2 as objectVal,
  off2 as off,
  onChildAdded2 as onChildAdded,
  onChildChanged2 as onChildChanged,
  onChildMoved2 as onChildMoved,
  onChildRemoved2 as onChildRemoved,
  onDisconnect2 as onDisconnect,
  onValue2 as onValue,
  orderByChild2 as orderByChild,
  orderByKey2 as orderByKey,
  orderByPriority2 as orderByPriority,
  orderByValue2 as orderByValue,
  provideDatabase,
  push2 as push,
  query2 as query,
  ref2 as ref,
  refFromURL2 as refFromURL,
  remove2 as remove,
  runTransaction2 as runTransaction,
  serverTimestamp2 as serverTimestamp,
  set2 as set,
  setPriority2 as setPriority,
  setWithPriority2 as setWithPriority,
  startAfter2 as startAfter,
  startAt2 as startAt,
  stateChanges2 as stateChanges,
  update2 as update
};
//# sourceMappingURL=@angular_fire_database.js.map
