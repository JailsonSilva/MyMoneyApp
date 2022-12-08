export function selectTab(tabId){
    return{
        type: 'TAB-SELECTED',
        payload: tabId
    }
}