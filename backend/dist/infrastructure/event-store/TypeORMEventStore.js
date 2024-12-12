"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMEventStore = void 0;
const EventEntity_1 = require("../entities/EventEntity");
const data_source_1 = require("../../data-source");
class TypeORMEventStore {
    constructor() {
        this.eventRepository = data_source_1.AppDataSource.getRepository(EventEntity_1.EventEntity);
    }
    save(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEntity = this.eventRepository.create(event);
            yield this.eventRepository.save(eventEntity);
        });
    }
    getEventsForAggregate(aggregateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const events = yield this.eventRepository.find({ where: { aggregateId } });
            return events;
        });
    }
}
exports.TypeORMEventStore = TypeORMEventStore;
