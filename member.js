function skillsMember() {
    return {
    restrict: 'E'
    templateUrl: 'modules/skills/view/member.html',
    controller: 'Skillsmembercontroller',
    controllerAs: 'vm',
    bindtocontroller: true,
    Scope: {
        member: 'm'
    }
    };
}