REPORTER	?= spec
TEST		?=

test:
	mocha test/$(TEST) --reporter $(REPORTER)
.PHONY:	test
