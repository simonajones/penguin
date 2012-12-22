// Queue View

// ------------------------------------------------------------------------
// Models
// ------------------------------------------------------------------------

ko.applyBindings(page);

// ------------------------------------------------------------------------
// Router
// ------------------------------------------------------------------------

var router = Router();
router.on("/queues", page.queuesView.show);
router.on("/queue/new", page.queueCreate.show);
router.on("/queue/:id", page.queueView.show);
router.init("/queues");
