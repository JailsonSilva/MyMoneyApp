export function selectTab(tabId){
    return{
        type: 'TAB-SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}